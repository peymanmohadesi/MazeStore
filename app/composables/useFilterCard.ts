export function useFilterCard(isOpen: boolean) {
    const isOpenState= ref(isOpen)

    const toggleCardOpen= () => {
        isOpenState.value= !isOpenState.value
    }

    return {
        isOpenState,

        toggleCardOpen
    }
}