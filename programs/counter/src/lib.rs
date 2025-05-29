use anchor_lang::prelude::*;

declare_id!("7kJooD2pwiJV7eqbiwLgcZEjKzhAtD2n1MgAbsXiCewf");

#[program]
pub mod counter {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
