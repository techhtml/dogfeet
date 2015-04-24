var data = [
    {
        "klass": "panel-wrap",
        "content": "Web Front-End Developer",
        "titles": "ChoEun",
        "bgImage": ""
    },
    {
        "titles": "私は日本に会社を探しています。今は韓国で住んでいます。詳しいのはこちらでご確認ください。",
        "content": "- 上記のリンクをご確認ください。",
        "klass": "panel-text",
        "bgImage": ""
    },
    {
        "titles":"네이버항공권",
        "content":"네이버에 운영하는 항공권 서비스입니다. sass로 구현되어 있습니다",
        "klass":"panel-work",
        "bgImage": "https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-9/11182242_874857979242107_3341319670120412296_n.jpg?oh=840c2d7f827a04609e5d137b116b3b79&oe=55D695F7&__gda__=1440467791_58c42e098e7e784d7687af74ba7f1dcd"
    },
    {
        "titles":"네이버항공권",
        "content":"네이버에 운영하는 항공권 서비스입니다. sass로 구현되어 있습니다",
        "klass":"panel-work",
        "bgImage": "https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-9/11182242_874857979242107_3341319670120412296_n.jpg?oh=840c2d7f827a04609e5d137b116b3b79&oe=55D695F7&__gda__=1440467791_58c42e098e7e784d7687af74ba7f1dcd"
    },
    {
        "titles":"네이버항공권",
        "content":"네이버에 운영하는 항공권 서비스입니다. sass로 구현되어 있습니다",
        "klass":"panel-work",
        "bgImage": "https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-9/11182242_874857979242107_3341319670120412296_n.jpg?oh=840c2d7f827a04609e5d137b116b3b79&oe=55D695F7&__gda__=1440467791_58c42e098e7e784d7687af74ba7f1dcd"
    },
    {
        "titles":"네이버항공권",
        "content":"네이버에 운영하는 항공권 서비스입니다. sass로 구현되어 있습니다",
        "klass":"panel-work",
        "bgImage": "https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-9/11182242_874857979242107_3341319670120412296_n.jpg?oh=840c2d7f827a04609e5d137b116b3b79&oe=55D695F7&__gda__=1440467791_58c42e098e7e784d7687af74ba7f1dcd"
    }
]

var PanelList = React.createClass({
    render: function() {
        var PanelList = this.props.data.map(function(result) {
            return (
                <Panel title={result.titles} content={result.content} bgImage={result.bgImage} klass={result.klass} />
            )
        })
        return (
            <div className="panel-list">
                {PanelList}
            </div>
        )
    }
});
var Panel = React.createClass({
    render: function() {
        var klassName = "panel " + this.props.klass;
        if(this.props.klass === "panel-text") {
            return (
                <div className={klassName}>
                    <div className="panel-content">
                        <a href="#">
                            <p>{this.props.title}</p>
                            <span>{this.props.content}</span>
                        </a>
                    </div>
                </div>
            )
        }
        if(this.props.klass === "panel-work") {
            var bgStyle = {
                "backgroundImage":"url(" +this.props.bgImage+")"
            }
            return (
                <div className={klassName}>
                    <div className="panel-content">
                        <a href="#">
                            <span style={bgStyle}></span>
                            <div className="panel-work-header">
                                <strong>{this.props.title}</strong>
                                <p>{this.props.content}</p>
                            </div>
                        </a>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={klassName}>
                    <div className="panel-content">
                        <a href="#">
                            <strong>{this.props.title}</strong>
                            <p>{this.props.content}</p>
                        </a>
                    </div>
                </div>
            )
        }
    }
});

React.render(
    <PanelList data={data} />,
    document.getElementById("content")
)