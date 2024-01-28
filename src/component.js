function Component(){
    return(
        <div className="comp-1">
            <div className="input">
             <input type="text" value="urban"></input>
            <button>Process Word</button>
            </div>
            <div className="comp-1-info1">
                <table>
                    <tr>
                        <td>Characters</td><td>Words</td>
                    </tr>
                    <tr>
                        <td>5</td><td>1</td>
                    </tr>
                </table>
            </div>
            <div className="comp-1-info2">
                <table>
                    <tr><td className="cell">Definition:</td><td>in relating to or characterstic of a town or city.</td></tr>
                    <tr><td className="cell">Parts of speech:</td><td>Noun</td></tr>
                    <tr><td className="cell">Synonyms</td><td>Town</td></tr>
                    <tr><td className="cell">Antonyms</td><td>Rural</td></tr>
                </table>
            </div>
        </div>

    )
}
export default Component;