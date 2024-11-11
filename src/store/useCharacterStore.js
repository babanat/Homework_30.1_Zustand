import { create } from 'zustand';

const useCharacterStore = create((set) => ({
  characters: [],
  fetchCharacter: async (id) => {
    try {
      const response = await fetch(`https://swapi.py4e.com/api/people/${id}/`);
      const data = await response.json();
      set((state) => ({ characters: [...state.characters, data] }));
    } catch (error) {
      console.error("Error fetching character:", error);
    }
  },
  clearCharacters: () => set({ characters: [] }),
}));

export default useCharacterStore;
