module Body exposing (bodyView)

import Html exposing (Html, div, p, text)

bodyView : Html msg
bodyView =
    div []
        [ p [] [ text "Main content goes here." ] ]
