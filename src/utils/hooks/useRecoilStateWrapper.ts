import { useEffect, useState } from "react";
import { RecoilState, SetterOrUpdater, useRecoilState } from "recoil"

export function useRecoilStateWrapper<T>(recoilState: RecoilState<T>, defaultValue: any = null): [T, SetterOrUpdater<T>] {
    const [usedState, setUsedState] = useRecoilState(recoilState)
    const [isInitial, setInitial] = useState(true)

    useEffect(() => {
        setInitial(false)
    }, [])
    

    return [
        isInitial ? defaultValue : usedState,
        setUsedState,
    ]
}