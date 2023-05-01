
// css만으로 toggle 기능 구현하기
export default function Toggle(){
    return (<>
        <input type="checkbox" id="toggle" hidden/>
        <label htmlFor='toggle' className="toggleSwitch">
            <span className="toggleButton"></span>
        </label>
        </>
    )
}