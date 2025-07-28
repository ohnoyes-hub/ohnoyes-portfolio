module Header exposing (headerView)

import Html exposing (Html, div, h1, nav, ul, li, a, text)

headerView : Html msg
headerView =
    headerStructure


headerStructure : Html msg
headerStructure =
    nav []
        [ h1 [] [ text "My Portfolio" ]
        , ul []
            [ li [] [ a [ ] [ text "Home" ] ]
            , li [] [ a [ ] [ text "About" ] ]
            , li [] [ a [ ] [ text "Skills" ] ]
            , li [] [ a [ ] [ text "Projects" ] ]
            ]
        ]
