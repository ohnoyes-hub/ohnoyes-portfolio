module Projects exposing (projectsView)

import Html exposing (Html, div, h2, ul, li, text)

projectsView : Html msg
projectsView =
    div []
        [ h2 [] [ text "Projects" ]
        , ul []
            [ li [] [ text "Project 1" ]
            , li [] [ text "Project 2" ]
            ]
        ]
