module Skills exposing (skillsView)

import Html exposing (Html, div, h2, ul, li, text)

skillsView : Html msg
skillsView =
    div []
        [ h2 [] [ text "Skills" ]
        , ul []
            [ li [] [ text "Skill 1" ]
            , li [] [ text "Skill 2" ]
            ]
        ]
