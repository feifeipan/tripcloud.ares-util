#	@ctrip/ares-util/eros-mime

这个模块用于管理 EROS 中的自定义文件类型。

EROS 系统中，删除一个文件或目录，会在存储中相同位置保留一个特殊的文件作为占位文件，以备不虞之需，用户可以直接恢复文件或目录。为了和普通的文件相区别，这些文件的 MIME 是自定义的。

##	Get Started

```javascript
const erosmime = require('@ctrip/ares-util/eros-mime');

erosmime.format.recycled();
// return "application/recycled+json"

erosmime.format.recycled('folder');
// return "application/recycled.folder+json"
```

##	API

*	string __erosmime.format.recycled__()
*	string __erosmime.format.recycled__( "folder" )
*	boolean __erosmime.isReserved__( string *mime* )
*	boolean __erosmime.isRecycled__( string *mime* )
