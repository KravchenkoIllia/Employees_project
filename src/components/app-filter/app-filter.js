import './app-filter.css';

const AppFilter = (props) => {
    const buttonsData = [                                   //Динамические кнопки
        {name: 'all', label: 'Всі співробітники'},
        {name: 'rise', label: 'На підвищення'},
        {name: 'moreThen1000', label: 'З/П більше 1000$'}
    ];
    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                {label}
            </button>
        )
    });

    return (
        <div className="btn-group">
            {buttons}
            {/* <button                         //Статичные кнопки
                className="btn btn-light"
                type="button">
                    Всі співробітники
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    На підвищення
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    З/П більше 1000$
            </button> */}
        </div>
    )
}

export default AppFilter;