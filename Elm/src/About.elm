module About exposing (aboutView)

import Html exposing (Html, div, h2, p, text)

aboutView : Html msg
aboutView =
    div []
        [ h2 [] [ text "About Me" ]
        , p [] [ text "Your detailed About description goes here." ]
        ]
