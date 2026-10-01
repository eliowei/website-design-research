#!/usr/bin/env python3
"""網站研究用的截圖工具：切長截圖、取樣色碼、偵測空白區。

用法：
  python capture_tools.py slice <截圖> <輸出資料夾> [--prefix d] [--height 2200] [--scale 0.5]
      把長截圖切成可以用 Read 檢視的分段，印出每段的證據 ID 與原圖 y 範圍。
  python capture_tools.py sample <截圖> <x,y> [<x,y> ...]
      取樣指定座標（原圖座標）的色碼。
  python capture_tools.py blank <截圖> [--min 300]
      找出高度 ≥ min 像素、幾乎單色的區段。截圖下半部空白通常代表內容要捲動才進場，
      這時下半頁不能用截圖當證據，要在報告裡說明。

需要 Pillow：pip install pillow
"""
import argparse
import os
import sys

try:
    from PIL import Image
except ImportError:
    sys.exit('需要 Pillow：pip install pillow')


def cmd_slice(a):
    im = Image.open(a.image).convert('RGB')
    w, h = im.size
    os.makedirs(a.outdir, exist_ok=True)
    for i, y in enumerate(range(0, h, a.height)):
        part = im.crop((0, y, w, min(h, y + a.height)))
        if a.scale != 1:
            part = part.resize((max(1, int(part.width * a.scale)), max(1, int(part.height * a.scale))))
        name = f'{a.prefix}{i:02d}.png'
        part.save(os.path.join(a.outdir, name))
        print(f'S-{a.prefix}{i:02d}\t{os.path.join(a.outdir, name)}\ty={y}-{min(h, y + a.height)}')
    print(f'# 原圖 {w}x{h}，共 {i + 1} 段', file=sys.stderr)


def cmd_sample(a):
    im = Image.open(a.image).convert('RGB')
    for p in a.points:
        x, y = (int(v) for v in p.split(','))
        if not (0 <= x < im.width and 0 <= y < im.height):
            print(f'{x},{y}\t超出範圍（{im.width}x{im.height}）')
            continue
        r, g, b = im.getpixel((x, y))
        print(f'{x},{y}\t#{r:02X}{g:02X}{b:02X}')


def row_is_flat(im, y, tol):
    # 每列取 64 個點，最大與最小亮度差小於 tol 視為單色
    xs = range(0, im.width, max(1, im.width // 64))
    vals = [sum(im.getpixel((x, y))) for x in xs]
    return max(vals) - min(vals) <= tol


def cmd_blank(a):
    im = Image.open(a.image).convert('RGB')
    start = None
    found = []
    for y in range(0, im.height, 4):
        flat = row_is_flat(im, y, a.tol)
        if flat and start is None:
            start = y
        elif not flat and start is not None:
            if y - start >= a.min:
                found.append((start, y))
            start = None
    if start is not None and im.height - start >= a.min:
        found.append((start, im.height))
    if not found:
        print('沒有偵測到大段空白')
    for s, e in found:
        tail = '（延伸到截圖底部：很可能是捲動才進場的內容沒有渲染）' if e == im.height else ''
        print(f'空白 y={s}-{e}（高 {e - s}px）{tail}')


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = p.add_subparsers(dest='cmd', required=True)
    s = sub.add_parser('slice')
    s.add_argument('image'); s.add_argument('outdir')
    s.add_argument('--prefix', default='d'); s.add_argument('--height', type=int, default=2200)
    s.add_argument('--scale', type=float, default=0.5)
    s.set_defaults(f=cmd_slice)
    s = sub.add_parser('sample')
    s.add_argument('image'); s.add_argument('points', nargs='+')
    s.set_defaults(f=cmd_sample)
    s = sub.add_parser('blank')
    s.add_argument('image'); s.add_argument('--min', type=int, default=300)
    s.add_argument('--tol', type=int, default=12)
    s.set_defaults(f=cmd_blank)
    a = p.parse_args()
    a.f(a)


if __name__ == '__main__':
    main()
