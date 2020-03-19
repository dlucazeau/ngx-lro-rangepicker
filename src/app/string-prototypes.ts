String.prototype.stringFormat = stringFormat;

interface String
{
    stringFormat: typeof stringFormat;
}

function stringFormat (...args)
{
    let s = this,
        i = arguments.length;

    while (i--)
    {
        s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
    }

    return s;

}
