// Source code licensed under Apache License 2.0. Copyright © 2017 William Ngan. (https://github.com/williamngan/pts)
Pts.quickStart("#pt", "#3a3939")((e, t) => { let o = space.size.$multiply(.2).y, s = new Group(new Pt(0, o), new Pt(space.size.x, space.size.y - o)), i = Line.subpoints(s, 200), p = i.map(e => Geom.perpendicular(e.$subtract(s[0]).unit()).add(e)), a = space.pointer.x / space.size.x * Const.two_pi * 2; p.forEach((t, s) => { let p = s / 200 * Const.two_pi + a + Num.cycle(e % 1e4 / 1e4); s % 2 == 0 ? (t[0].to(Geom.interpolate(i[s], t[0], Math.sin(p) * o * 2)), t[1].to(i[s]), form.stroke("#0c6", 2).line(t)) : (t[0].to(i[s]), t[1].to(Geom.interpolate(i[s], t[1], Math.cos(p) * o * 2)), form.stroke("#f03", 2).line(t)) }) });